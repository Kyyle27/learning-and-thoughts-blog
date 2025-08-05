export default function ArticleListTitleDescription({
  title, description
}: {
  title: string,
  description: string
}) {
  return (
    <div className="mb-4">
      <h1 className="primary-title">{title}</h1>
      <span className="text-stone-700 dark:text-stone-300">{description}</span>
    </div>
  )
}