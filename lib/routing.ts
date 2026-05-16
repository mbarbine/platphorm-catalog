export function routeSlug(id: string): string {
  return encodeURIComponent(id).replaceAll(".", "~2e~")
}

export function routeSlugToId(slug: string): string {
  let value = slug.replaceAll("~2e~", ".")
  for (let i = 0; i < 3; i += 1) {
    let decoded: string
    try {
      decoded = decodeURIComponent(value)
    } catch {
      return value
    }
    if (decoded === value) return decoded
    value = decoded
  }
  return value
}

export function catalogRepoHref(repoId: string): string {
  return `/repositories/${routeSlug(repoId)}`
}

export function capabilityHref(capabilityId: string): string {
  return `/capabilities/${routeSlug(capabilityId)}`
}

export function componentHref(componentId: string): string {
  return `/components/${routeSlug(componentId)}`
}
