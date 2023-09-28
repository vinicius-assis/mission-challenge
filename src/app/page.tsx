import Button from "@/components/Atoms/Button/Button";
import HeaderWrapper from "@/components/Atoms/HeaderWrapper/HeaderWrapper";

export default function Home() {
  return (
    <main>
      <HeaderWrapper>
        <Button className="py-1 px-3 rounded-sm bg-blue-500" content="Listar Produtos" />
        <Button className="py-1 px-3 rounded-sm bg-blue-500" content="+ Adicionar" />
      </HeaderWrapper>
    </main>
  )
}
