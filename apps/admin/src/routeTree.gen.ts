/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NewsImport } from './routes/news'
import { Route as MediaImport } from './routes/media'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const LinksLazyImport = createFileRoute('/links')()
const ContactLazyImport = createFileRoute('/contact')()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const LinksLazyRoute = LinksLazyImport.update({
  path: '/links',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/links.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const NewsRoute = NewsImport.update({
  path: '/news',
  getParentRoute: () => rootRoute,
} as any)

const MediaRoute = MediaImport.update({
  path: '/media',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/media': {
      id: '/media'
      path: '/media'
      fullPath: '/media'
      preLoaderRoute: typeof MediaImport
      parentRoute: typeof rootRoute
    }
    '/news': {
      id: '/news'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactLazyImport
      parentRoute: typeof rootRoute
    }
    '/links': {
      id: '/links'
      path: '/links'
      fullPath: '/links'
      preLoaderRoute: typeof LinksLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  MediaRoute,
  NewsRoute,
  ContactLazyRoute,
  LinksLazyRoute,
  LoginLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/media",
        "/news",
        "/contact",
        "/links",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/media": {
      "filePath": "media.tsx"
    },
    "/news": {
      "filePath": "news.tsx"
    },
    "/contact": {
      "filePath": "contact.lazy.tsx"
    },
    "/links": {
      "filePath": "links.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
