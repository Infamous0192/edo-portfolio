import ProjectThumbnail from 'components/ProjectThumbnail'

const Project: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="space-y-12 md:space-y-24 my-12">
        <ProjectThumbnail photo="/img/photography.png" link="/project/photography">PHOTOGRAPHY</ProjectThumbnail>
        <ProjectThumbnail photo="/img/videography.png" link="/project/videography">VIDEOGRAPHY</ProjectThumbnail>
        <ProjectThumbnail photo="/img/infographic.png" link="/project/infographic">INFOGRAPHIC</ProjectThumbnail>
        <ProjectThumbnail photo="/img/poster.png" link="/project/poster">POSTER/MAGZ</ProjectThumbnail>
        <ProjectThumbnail photo="/img/artwork.png" link="/project/artwork">ARTWORK</ProjectThumbnail>
        <ProjectThumbnail photo="/img/branding.png" link="/project/branding">BRANDING</ProjectThumbnail>
        <ProjectThumbnail photo="/img/3d.png" link="/project/3d">3D MODEL</ProjectThumbnail>
        <ProjectThumbnail photo="/img/others.png" link="/project/other">OTHERS</ProjectThumbnail>
      </div>
    </div>
  )
}

export default Project
