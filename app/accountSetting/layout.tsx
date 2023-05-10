import Header2 from "../components/header/header2"


export const metadata = {
    title: 'TBVH | Account Settings',
    description: 'Generated by create next app',
  }
  
  export default function AccountSettingsLayout({
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