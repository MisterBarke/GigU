"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${isActiveParent(homeItems, usePathname()) ? "current" : ""
              } dropdown`}
          >
            {homeItems.map((item) => (

              <Link href={item.routePath}>{item.name}</Link>
            ))}
          </li>
          {/* End homepage menu items */}

          <li
            className={`${isActiveParent(findJobItems, usePathname()) ? "current" : ""
              }`}
            id="has-mega-menu"
          >
            {findJobItems.map((item) => (

              <Link href={item.routePath}>{item.title}</Link>
            ))}
          </li>
          {/* End findjobs menu items */}

          <li
            className={`${isActiveParent(employerItems, usePathname()) ||
                usePathname()?.split("/")[1] === "employers-dashboard"
                ? "current"
                : ""
              } dropdown`}
          >
            <span>Employers</span>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
            </ul>
          </li>
          {/* End Employers menu items */}

          <li
            className={`${isActiveParent(candidateItems, usePathname()) ||
                usePathname()?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                  ? "current"
                  : ""
              } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link href="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li>
          {/* End Candidates menu items */}

          <li
            className={`${isActiveParentChaild(blogItems, usePathname()) ? "current" : ""
              }`}
          >
            {
              blogItems.map((item) => (
                <Link href={item.routePath}>{item.name}</Link>

              ))
            }

          </li>
          {/* End Blog menu items */}

          <li
            className={`${isActiveParentChaild(pageItems, usePathname()) ||
                isActiveParentChaild(shopItems[0].items, usePathname())
                ? "current "
                : ""
              } dropdown`}
          >
            <span>Autres</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${isActiveParentChaild(shopItems[0].items, usePathname())
                        ? "current "
                        : ""
                      }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
