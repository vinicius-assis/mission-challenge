import Button from "../Button/Button"

const TotalCartDisplay = ({ content }: any) => {
  return (
    <li className="flex justify-between py-2 items-center">
      <h4 className="pl-1 text-base font-bold italic mr-2">Total:</h4>
      <Button variant="success" className="w-40" disabled content={`R$ ${content}`} />
    </li>
  )
}

export default TotalCartDisplay
