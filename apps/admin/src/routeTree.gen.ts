/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

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
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const LinksLazyRoute = LinksLazyImport.update({
  id: '/links',
  path: '/links',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/links.lazy').then((d) => d.Route))

const ContactLazyRoute = ContactLazyImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contact.lazy').then((d) => d.Route))

const NewsRoute = NewsImport.update({
  id: '/news',
  path: '/news',
  getParentRoute: () => rootRoute,
} as any)

const MediaRoute = MediaImport.update({
  id: '/media',
  path: '/media',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
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

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/media': typeof MediaRoute
  '/news': typeof NewsRoute
  '/contact': typeof ContactLazyRoute
  '/links': typeof LinksLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/media': typeof MediaRoute
  '/news': typeof NewsRoute
  '/contact': typeof ContactLazyRoute
  '/links': typeof LinksLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/media': typeof MediaRoute
  '/news': typeof NewsRoute
  '/contact': typeof ContactLazyRoute
  '/links': typeof LinksLazyRoute
  '/login': typeof LoginLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/media' | '/news' | '/contact' | '/links' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/media' | '/news' | '/contact' | '/links' | '/login'
  id: '__root__' | '/' | '/media' | '/news' | '/contact' | '/links' | '/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MediaRoute: typeof MediaRoute
  NewsRoute: typeof NewsRoute
  ContactLazyRoute: typeof ContactLazyRoute
  LinksLazyRoute: typeof LinksLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MediaRoute: MediaRoute,
  NewsRoute: NewsRoute,
  ContactLazyRoute: ContactLazyRoute,
  LinksLazyRoute: LinksLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

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
