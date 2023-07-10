import Header2 from "../components/header/header2"


export const metadata = {
    title: 'TBVH | Settings',
    description: 'Set up your profile here',
  }
  
  export default function SettingsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="mytheme">
        
        <body className="bg-white">
          <Header2 homeColor="text-nothing" createColor="text-nothing" profileColor="text-nothing"/>
          {children}
          
        </body>
      </html>
    )
  }