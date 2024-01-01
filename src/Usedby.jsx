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
                    <Avatar img="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg" theme={customtheme} rounded size="xl" />
                    <Avatar img="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg" theme={customtheme} rounded size="xl" />
                    <Avatar img="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png?size=2" theme={customtheme} rounded size="xl" />
                    <Avatar img="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" theme={customtheme} rounded size="xl" />
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBHyuf_bJCZp8l1H7u1JJDjkaGnv7_N1IAw&usqp=CAU" theme={customtheme} rounded size="xl" />
                    <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&usqp=CAU" theme={customtheme} rounded size="xl" />
                    <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&usqp=CAU" theme={customtheme} rounded size="xl" />
                </div>

            </div>
        </Card>
    );
};

export default Usedby;