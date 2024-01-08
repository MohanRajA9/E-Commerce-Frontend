import { Profile } from './profile.js';

export function SuperHeroList() {
  const superHeroList = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIdSm1lURjop7-fg9QZUbwd_ruoWnro3nmtRVTJHILWD72sVN3xX6l82HZQXI5CuA4cE&usqp=CAU",
      name: "Captain America"
    },
    {
      img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/19/1494599203-greatest-superhero-films-iron-man.jpg?resize=980:*",
      name: "Iron Man"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoB9vAEokszZyFjsjuLH7lRfE4IHbphLY7w&usqp=CAU",
      name: "Ant Man"
    }
  ];
  return (
    <>
      {superHeroList.map((hero) => {
        return <Profile Name={hero.name} Image={hero.img} />;
      })}
    </>
  );
}
