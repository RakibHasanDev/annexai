import React from 'react';

const Home = () => {

    const services = [
        {
            title: 'Face Psyche',
            description: 'Face Detection & Recognition'
  
        },
        {
            title: '……Psyche',
            description: 'Object Detection & Recognition'
  
        },
        {
            title: 'Masked Psyche',
            description: 'Partial Covered Face Detection & Recognition '
  
        },
        {
            title: 'Archived',
            description: 'Image Detection & Recognition'
  
        },
        {
            title: 'Mass Attendance',
        },
        {
            title: 'Visitors Recognition',
        },
        {
            title: 'Payment & Customer Segmentation',
        },
        {
            title: 'Security & Surveillance',
        },
        {
            title: 'Criminal Identification',
        },
        {
            title: 'Biometric Border Control',
        },
        {
            title: 'Classroom Monitoring',
        },
        {
            title: 'Traffic Monitoring',
        },
    ]

    return (
        <div className='min-h-screen'>
            

            <div className='w-[95%] md:w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                {
                    services.map((service, index) => <div
                        key={index}
                    >
                        

                        <div className='border-[1px] border-gray-700 min-h-[13rem] text-center '>

                            <h3 className='text-xl text-[#F70000] font-semibold mt-[5rem]'>
                                    {service?.title}
                                </h3>
                                <p>
                                    {
                                        service?.description


                                    }
                                </p>


                            </div>

                        


                    </div>)
                }

            </div>

        </div>
    );
};

export default Home;