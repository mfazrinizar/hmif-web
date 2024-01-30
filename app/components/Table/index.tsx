import Image from "next/image";

interface table {
    index: number;
    name: string;
    value1: number;
    value2: number;
    value3: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "Nama 1",
        imgSrc: '/images/Table/tableSample.png',
        value1: 1,
        value2: -1,
        value3: 3,
        action: "Test",
    },
    {
        index: 2,
        name: "Nama 2",
        imgSrc: '/images/Table/tableSample.png',
        value1: 1,
        value2: -1,
        value3: 3,
        action: "Tset",
    },
    {
        index: 3,
        name: "Nama 3",
        imgSrc: '/images/Table/tableSample.png',
        value1: 1,
        value2: -1,
        value3: 3,
        action: "Test",
    },
    {
        index: 4,
        name: "Nama 4",
        imgSrc: '/images/Table/tableSample.png',
        value1: 1,
        value2: -1,
        value3: 3,
        action: "Tset",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="table-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Tes Tabel</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">NAME</th>
                                <th className="px-4 py-4 font-normal">VALUE1</th>
                                <th className="px-4 py-4 font-normal">VALUE2</th>
                                <th className="px-4 py-4 font-normal">VALUE3</th>
                                <th className="px-4 py-4 font-normal">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">${items.value1.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.value2 < 0 ? 'text-red' : 'text-green'} `}>{items.value2}%</td>
                                    <td className="px-4 py-6 text-center text-white">${items.value3.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.action === 'Test' ? 'text-green' : 'text-red'}`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    )
}

export default Table;
