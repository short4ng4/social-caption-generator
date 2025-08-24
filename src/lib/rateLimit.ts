// Simple rate limiting for guest users
export class RateLimiter {
  private static readonly MAX_GENERATIONS = 10
  private static readonly STORAGE_KEY = 'caption_generator_session'

  static getSession(): { generationsUsed: number; maxGenerations: number; sessionId: string } {
    if (typeof window === 'undefined') {
      return {
        generationsUsed: 0,
        maxGenerations: this.MAX_GENERATIONS,
        sessionId: 'server',
      }
    }

    const stored = localStorage.getItem(this.STORAGE_KEY)
    
    if (stored) {
      try {
        const session = JSON.parse(stored)
        // Check if session is from today
        const today = new Date().toDateString()
        const sessionDate = new Date(session.date).toDateString()
        
        if (sessionDate === today) {
          return {
            generationsUsed: session.generationsUsed || 0,
            maxGenerations: this.MAX_GENERATIONS,
            sessionId: session.sessionId,
          }
        }
      } catch (error) {
        console.error('Error parsing stored session:', error)
      }
    }

    // Create new session
    const newSession = {
      generationsUsed: 0,
      maxGenerations: this.MAX_GENERATIONS,
      sessionId: `session_${Date.now()}`,
      date: new Date().toISOString(),
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newSession))
    
    return {
      generationsUsed: 0,
      maxGenerations: this.MAX_GENERATIONS,
      sessionId: newSession.sessionId,
    }
  }

  static canGenerate(): boolean {
    const session = this.getSession()
    return session.generationsUsed < session.maxGenerations
  }

  static incrementUsage(): void {
    if (typeof window === 'undefined') return

    const session = this.getSession()
    const updatedSession = {
      generationsUsed: session.generationsUsed + 1,
      sessionId: session.sessionId,
      date: new Date().toISOString(),
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedSession))
  }

  static getRemainingGenerations(): number {
    const session = this.getSession()
    return Math.max(0, session.maxGenerations - session.generationsUsed)
  }
}
