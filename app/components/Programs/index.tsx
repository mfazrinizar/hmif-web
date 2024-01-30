import Image from "next/image";


interface programsdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const programsdata: programsdata[] = [
    {
        imgSrc: '/images/program/programOne.svg',
        heading: 'Mentoring Pemrograman',
        subheading: 'Membantu mahasiswa baru memahami pemrograman dasar.',
    },
    {
        imgSrc: '/images/program/programTwo.svg',
        heading: 'Srifoton',
        subheading: 'Mewadahi kreativitas, inovasi, dan kemampuan akademik mahasiswa di bidang teknologi informasi.',
    },
    {
        imgSrc: '/images/program/programThree.svg',
        heading: 'IF Cup',
        subheading: 'Mewadahi sportivitas dan kreativitas mahasiswa di bidang olahraga.',
    },
]

const Programs = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="program-section">
                <div className="radial-bg hidden lg:block"></div>
                <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                    {/* Column-1 */}
                    <div>
                        <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">Program Unggulan</h3>
                        <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Program Unggulan yang Menjadi Fondasi Berjalannya Organisasi</h2>
                        <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                    </div>
                    {/* Column-2 */}
                    <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                            {programsdata.map((items, i) => (
                                <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                    <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                    </div>
                                    <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                    <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Programs;
