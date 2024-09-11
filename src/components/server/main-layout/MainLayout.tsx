import { TemplateLayoutProps } from '../../../common/navigation/types/page';

export function MainLayout(props: TemplateLayoutProps) {
  const { children, language, locale } = props;
  return (
    <section className="flex max-h-[100vh] flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
    </section>
  );
}
