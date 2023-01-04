
export default function Menu() {
    return (
        <>
            <div className="dropdown-menu">
                <a href>Item 1</a>
                <a href>Item 2</a>
                <a href>Item 3</a>
            </div>
        </>
    )
}

export const MenuItems = [
    {
      title: 'Marketing',
      path: '/marketing',
      cName: 'dropdown-link'
    },
    {
      title: 'Consulting',
      path: '/consulting',
      cName: 'dropdown-link'
    },
    {
      title: 'Design',
      path: '/design',
      cName: 'dropdown-link'
    },
    {
      title: 'Development',
      path: '/development',
      cName: 'dropdown-link'
    }
  ];