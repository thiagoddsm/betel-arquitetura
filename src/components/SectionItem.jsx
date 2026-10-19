import Divider from '@/components/Divider'
import Ancora from '@/components/Ancora'

const SectionItem = ({
  title = 'Seu título',
  description = 'Coloque aqui sua descrição',
  buttonText = 'saiba mais',
  link,
  divider = true,
  as: TitleTag = 'h3', // SEO 👈
}) => {
  return (
    <div>
      
      {/* Título + Divider */}
      <div className="mb-2 flex items-center gap-6">
        <TitleTag className="text-lg md:text-2xl uppercase font-bold text-primary">
          {title}
        </TitleTag>

        {divider && (
          <Divider
            height="2px"
            width="100%"
            color="bg-primary"
          />
        )}
      </div>

      {/* Conteúdo */}
      <div className="pe-8">
        <p>{description}</p>

        {buttonText && link && (
          <div className="mt-6">
            <Ancora
              href={link}
              text={buttonText}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionItem
