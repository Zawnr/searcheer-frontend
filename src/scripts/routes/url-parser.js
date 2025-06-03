function extractPathnameSegments(path) {
  const splitUrl = path.split('/').filter(Boolean); // filter(Boolean) hapus string kosong
  return {
    resource: splitUrl[0] || null,
    id: splitUrl[1] || null,
  };
}

function constructRouteFromSegments(pathSegments) {
  let pathname = '';
  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }
  if (pathSegments.id) {
    pathname = pathname.concat('/:id');
  }
  return pathname || '/';
}

export function getActivePathname() {
  let path = window.location.hash.replace('#', '');
  return path || '/';
}

export function getActiveRoute() {
  const pathname = getActivePathname();
  const urlSegments = extractPathnameSegments(pathname);
  return constructRouteFromSegments(urlSegments);
}

export function parseActivePathname() {
  const pathname = getActivePathname();
  return extractPathnameSegments(pathname);
}

export function getRoute(pathname) {
  const urlSegments = extractPathnameSegments(pathname);
  return constructRouteFromSegments(urlSegments);
}

export function parsePathname(pathname) {
  return extractPathnameSegments(pathname);
}
