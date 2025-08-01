import Header from "@/components/Header"

export default function Blog() {
    return (
      <div>
        <Header breadcrumbObject={{ homepage: 'blog' }} />
        <div>
          Blog homepage
        </div>
      </div>
    )
}