const EmptyListMessage: React.FC<{content: string}> = ({ content }) => {
  return (
    <div className="flex justify-center mt-5 p-2 mx-4 border-2 rounded-sm border-solid border-slate-500">
      <h2>{content}</h2>
    </div>
    )
}

export default EmptyListMessage
