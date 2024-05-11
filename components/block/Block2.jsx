import Image from "next/image";

const Block2 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/process-1.png",
      title: (
        <>
          Créer un compte pour débuter <br />
          pour commencer
        </>
      ),
    },
    {
      id: 2,
      icon: "/images/resource/process-2.png",
      title: (
        <>
          Explorer de milliers de CV <br />
        </>
      ),
    },
    {
      id: 3,
      icon: "/images/resource/process-3.png",
      title: (
        <>
          Trouvez le meilleur freelancer <br />
          pour votre tache
        </>
      ),
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="process-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="icon-box">
            <Image width={50} height={61} src={item.icon} alt="how it works" />
          </div>
          <h4>{item.title}</h4>
        </div>
      ))}
    </>
  );
};

export default Block2;
