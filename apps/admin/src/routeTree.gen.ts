/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as PanelRouteImport } from './routes/panel'
import { Route as IndexRouteImport } from './routes/index'
import { Route as PanelIndexRouteImport } from './routes/panel/index'
import { Route as PanelNewsRouteImport } from './routes/panel/news'
import { Route as PanelMediaRouteImport } from './routes/panel/media'
import { Route as PanelCreateRouteImport } from './routes/panel/create'

const PanelRoute = PanelRouteImport.update({
  id: '/panel',
  path: '/panel',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const PanelIndexRoute = PanelIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PanelRoute,
} as any)
const PanelNewsRoute = PanelNewsRouteImport.update({
  id: '/news',
  path: '/news',
  getParentRoute: () => PanelRoute,
} as any)
const PanelMediaRoute = PanelMediaRouteImport.update({
  id: '/media',
  path: '/media',
  getParentRoute: () => PanelRoute,
} as any)
const PanelCreateRoute = PanelCreateRouteImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => PanelRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/panel': typeof PanelRouteWithChildren
  '/panel/create': typeof PanelCreateRoute
  '/panel/media': typeof PanelMediaRoute
  '/panel/news': typeof PanelNewsRoute
  '/panel/': typeof PanelIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/panel/create': typeof PanelCreateRoute
  '/panel/media': typeof PanelMediaRoute
  '/panel/news': typeof PanelNewsRoute
  '/panel': typeof PanelIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/panel': typeof PanelRouteWithChildren
  '/panel/create': typeof PanelCreateRoute
  '/panel/media': typeof PanelMediaRoute
  '/panel/news': typeof PanelNewsRoute
  '/panel/': typeof PanelIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/panel'
    | '/panel/create'
    | '/panel/media'
    | '/panel/news'
    | '/panel/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/panel/create' | '/panel/media' | '/panel/news' | '/panel'
  id:
    | '__root__'
    | '/'
    | '/panel'
    | '/panel/create'
    | '/panel/media'
    | '/panel/news'
    | '/panel/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PanelRoute: typeof PanelRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/panel': {
      id: '/panel'
      path: '/panel'
      fullPath: '/panel'
      preLoaderRoute: typeof PanelRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/panel/': {
      id: '/panel/'
      path: '/'
      fullPath: '/panel/'
      preLoaderRoute: typeof PanelIndexRouteImport
      parentRoute: typeof PanelRoute
    }
    '/panel/news': {
      id: '/panel/news'
      path: '/news'
      fullPath: '/panel/news'
      preLoaderRoute: typeof PanelNewsRouteImport
      parentRoute: typeof PanelRoute
    }
    '/panel/media': {
      id: '/panel/media'
      path: '/media'
      fullPath: '/panel/media'
      preLoaderRoute: typeof PanelMediaRouteImport
      parentRoute: typeof PanelRoute
    }
    '/panel/create': {
      id: '/panel/create'
      path: '/create'
      fullPath: '/panel/create'
      preLoaderRoute: typeof PanelCreateRouteImport
      parentRoute: typeof PanelRoute
    }
  }
}

interface PanelRouteChildren {
  PanelCreateRoute: typeof PanelCreateRoute
  PanelMediaRoute: typeof PanelMediaRoute
  PanelNewsRoute: typeof PanelNewsRoute
  PanelIndexRoute: typeof PanelIndexRoute
}

const PanelRouteChildren: PanelRouteChildren = {
  PanelCreateRoute: PanelCreateRoute,
  PanelMediaRoute: PanelMediaRoute,
  PanelNewsRoute: PanelNewsRoute,
  PanelIndexRoute: PanelIndexRoute,
}

const PanelRouteWithChildren = PanelRoute._addFileChildren(PanelRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PanelRoute: PanelRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
