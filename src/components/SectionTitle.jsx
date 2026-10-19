import Divider from '@/components/Divider'

const SectionTitle = ({
  title,
  subtitle,
  color = 'bg-primary',
  align = 'center',
  width = 'container',
  divider = true,
  dividerWidth,
  dividerHeight,
  as: TitleTag = 'h2', // SEO 👈
}) => {

  const containerClass =
    width === 'container'
      ? 'container mx-auto'
      : 'mx-auto'

  const alignMap = {
    start: {
      justify: 'justify-start',
      text: 'text-left',
    },
    center: {
      justify: 'justify-center',
      text: 'text-center',
    },
    end: {
      justify: 'justify-end',
      text: 'text-right',
    },
  }

  const alignment = alignMap[align] || alignMap.center

  return (
    <div className={containerClass}>
      
      {/* Título */}
      <div className={`flex items-center ${alignment.justify} gap-2 md:gap-4`}>
        
        {divider && align !== 'start' && (
          <Divider
            width={dividerWidth}
            height={dividerHeight}
            color={color}
            addClasses="mt-2 md:mt-4"
          />
        )}

        <TitleTag className={`font-bold text-3xl md:text-6xl ${alignment.text}`}>
          {title}
        </TitleTag>

        {divider && align !== 'end' && (
          <Divider
            width={dividerWidth}
            height={dividerHeight}
            color={color}
            addClasses="mt-2 md:mt-4"
          />
        )}
      </div>

      {/* Subtítulo */}
      {subtitle && (
        <p
          className={`${alignment.text} ${
            align === 'center' ? 'w-[80%] mx-auto' : 'w-full'
          } mt-3`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle