import SocialMenu from '@/components/SocialMenu'

export default function Footer({ siteInfo, socialMenuHtml }) {
  return (
    <footer className="relative">
      <div className="container grid md:grid-cols-[40%_1fr] w-full mx-auto px-4 md:px-0 bg-primary">
        <div className="bg-white flex justify-center py-4 row-start-2 md:row-start-1">
          <a href={siteInfo.homeUrl}>
            <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/logo-footer.png`} alt='Logo'/>
          </a>
        </div>
        <div className="bg-primary text-right text-white flex flex-col justify-between">
          <SocialMenu classes="nav-menu-social justify-center md:justify-end" menuHtml={socialMenuHtml} />
          <p className="py-5 text-center md:text-end">
            <span className="font-bold">{siteInfo.name}</span> - {siteInfo.description}.
          </p>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full -z-1 grid grid-flow-col">
        <div></div>
        <div className="bg-primary"></div>
      </div>
    </footer>
  )
}