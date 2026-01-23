export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }
  #reap() {
    const now = Date.now();

    for (const [key, entry] of this.#cache.entries()) {
      if (now - entry.CreatedAt > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, {
      value: val,
      CreatedAt: Date.now(),
    });
  }

  get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (!entry) {
      return undefined;
    }
    return entry.value;
  }
}

export type CacheEntry<T> = {
  value: T;
  CreatedAt: number;
};
