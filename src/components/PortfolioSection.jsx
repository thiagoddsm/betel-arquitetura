import TabsWrapper from '@/components/TabsWrapper';
import SectionTitle from "@/components/SectionTitle";

export const PortfolioSection = ({ id }) => {
    return (
        <section className='section-portfolio' id={`${id}`}>
            <div className='px-5 md:px-0 py-12 md:py-16'>
                <SectionTitle title="portfólio" subtitle="Desenvolvemos e executamos projetos de arquitetura e interiores residenciais, comerciais e corporativos buscando concretizar os sonhos dos nossos clientes com bom gosto e acima de tudo, funcionalidade." color="bg-primary" align='center' dividerWidth="w-[70px]"></SectionTitle>
            </div>
            <TabsWrapper></TabsWrapper>
        </section>

    )
}

export default PortfolioSection