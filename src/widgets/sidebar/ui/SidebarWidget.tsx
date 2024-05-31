import { NavLink, useParams } from 'react-router-dom';

import { useAppSelector } from '~/shared/lib';

import { userModel } from '~/entities/user';

export function SidebarWidget() {
  const { userName } = useAppSelector(userModel.selectUserName);
  const { specialist = userName } = useParams();

  return (
    <section className="flex h-screen w-72 flex-col gap-12 bg-background p-8">
      <div>
        <div className="text-lg font-semibold">Профіль</div>
        <div>{specialist}</div>
      </div>
      <nav className="text flex flex-col gap-8">
        <NavLink to={`/${specialist}/main`}>Основне</NavLink>
        <NavLink to={`/${specialist}/contacts`}>Контакти</NavLink>
        <NavLink to={`/${specialist}/photo`}>Фото</NavLink>
        <NavLink to={`/${specialist}/brief`}>Досьє</NavLink>
        <NavLink to={`/${specialist}/experience`}>Досвід</NavLink>
        <NavLink to={`/${specialist}/themes`}>Запити</NavLink>
        <NavLink to={`/${specialist}/approach`}>Підхід</NavLink>
        <NavLink to={`/${specialist}/schedule`}>Графік</NavLink>
        <NavLink to={`/${specialist}/personal`}>Особисте</NavLink>
        <NavLink to={`/${specialist}/posts`}>Публікації</NavLink>
      </nav>
    </section>
  );
}
