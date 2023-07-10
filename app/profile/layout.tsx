import Header2 from "../components/header/header2"

export const metadata = {
    title: 'TBVH | Profile',
    description: 'This is your profile',
}
  
  //Simple and anonymous way to contribute to topics

  export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="mytheme">
        <body className="bg-white">
          <Header2 homeColor="text-nothing" createColor="text-nothing" profileColor="text-neutral"/>
          {children}
          
        </body>
      </html>
    )
  }