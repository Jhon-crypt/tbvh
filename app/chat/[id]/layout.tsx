import Header2 from "../../components/header/header2"

export const metadata = {
    title: 'TBVH | Chat',
    description: 'Contribute to topics anonymously',
  }
  
  export default function CreateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="mytheme">
        <body className="bg-white mb-30">
          <Header2 homeColor="text-nothing" createColor="text-nothing" profileColor="text-nothing"/>
          {children}
          
        </body>
      </html>
    )
  }