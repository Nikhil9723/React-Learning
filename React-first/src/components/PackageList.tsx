interface ItemProps {
    name: string,
    isPacked: boolean,
}


function Item({name, isPacked}: ItemProps) {
    if(isPacked) {
        return <li className="item">{name} ✅</li>
    }
    return <li className="item">{name}</li>
}

export default function PackageList() {
  return (
    <section>
        <h1>Sally Ride's Packaging List</h1>
        <ul>
            <Item name="Space suit" isPacked={true} />
            <Item name="Helmet with a golden leaf" isPacked={true} />
            <Item name="Photo of Tam" isPacked={false} />
            {/* <Item name="Space suit" isPacked={true} /> */}
        </ul>
    </section>
 );
}
