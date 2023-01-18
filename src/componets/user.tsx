import { UserProps } from "../types/user";
import {MdLocationPin} from 'react-icons/md';
import classes from './user.module.css';

const User = ({
    login,
    avatar_url,
     followers,
      following, 
      location,
    }: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && (
        <p className={location}>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
        <div className={classes.stats}>
            <div>
                <p>Seguidores:</p>
                <p className={classes.number}>{followers}</p>
            </div>
            <div>
            <p>Seguindo:</p>
            <p className={classes.number}>{following}</p>
        </div>
        </div>
        <a className={classes.a} href={`https://github.com/${login}`}>Ver Projetos</a>  
    </div>
  )
};

export default User;