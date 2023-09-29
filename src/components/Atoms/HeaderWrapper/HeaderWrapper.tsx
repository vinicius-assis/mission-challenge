const INITIAL_STYLE = 'flex justify-between p-5'

const HeaderWrapper: React.FC<IHeaderWrapper> = ({ children, className = INITIAL_STYLE }) => {
  return (
    <nav className={className}>
      {children}
    </nav>
  )
}

export default HeaderWrapper