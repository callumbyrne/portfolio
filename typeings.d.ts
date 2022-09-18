export interface IProjects {
  id: number
  attributes: {
    title: string
    order: string
    content: string
    tools: string
    slug: string
    images: {
      data: [IImage]
    }
  }
}

export interface IImage {
  attributes: {
    url: string
  }
}

export interface IProps {
  projects: [IProjects]
}

export interface IProject {
  project: {
    id: string
    attributes: {
      title: string
      order: string
      content: string
      tools: string
      slug: string
      images: {
        data: [IImage]
      }
    }
  }
}

export interface ISlug {
  id: string
  attributes: {
    slug: string
  }
}

export interface Params {
  params: {
    slug: string
  }
}
