import { Avatar, Card } from 'flowbite-react';
const customtheme = {
    "root": {
      "size": {
        "xl": "lg:w-36 lg:h-36 w-24 h-24"
      },
    },
  }
const Usedby = () => {

    return (
        <Card className='my-3'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Avatar theme={customtheme} rounded size="xl" />
                    <Avatar theme={customtheme} rounded size="xl" />
                    <Avatar theme={customtheme} rounded size="xl" />
                    <Avatar theme={customtheme} rounded size="xl" />
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Avatar theme={customtheme} rounded size="xl" />
                    <Avatar theme={customtheme} rounded size="xl" />
                    <Avatar theme={customtheme} rounded size="xl" />
                </div>

            </div>
        </Card>
    );
};

export default Usedby;