import S from "./CardTeam.module.css";

interface ICardTeamProps {
  name: string;
  position: string;
  image?: string;
  primaryColor: string;
}

export default function CardTeam({
  name,
  position,
  image,
  primaryColor,
}: ICardTeamProps) {
  return (
    <div
      className={S["card-team"]}
      style={{
        background: `linear-gradient(to top, #fff 180.1px, ${primaryColor} 91.9px`,
      }}
    >
      <div className={S["card-team-photo"]}>
        <img src={image} alt={`Foto de perfil de ${name}`} />
      </div>
      <div className={S["card-team-info"]}>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
}
