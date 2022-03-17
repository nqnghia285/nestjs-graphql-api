export async function getServerSideProps() {
   const laptops = ['lenovo', 'asus', 'mac']
   return {
      props: { laptops },
   }
}

export interface AsusProps {
   laptops: string[]
}

export default function Asus({ laptops }: AsusProps) {
   console.log(laptops)
   return <h1>Asus</h1>
}
