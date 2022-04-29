export interface IProjects {
  id: string
  attributes: {
    title: string
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
      content: string
      tools: string
      slug: string
      images: {
        data: [IImage]
      }
    }
  }
}
