import Header2 from "../components/header/header2"

export const metadata = {
    title: 'TBVH | Create Honest Boxes',
    description: 'Generated by create next app',
  }
  
  export default function CreateHonestBoxesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="mytheme">
        <body className="bg-white">
          <Header2 homeColor="text-nothing" createColor="text-secondary" profileColor="text-nothing"/>
          {children}
          
        </body>
      </html>
    )
  }