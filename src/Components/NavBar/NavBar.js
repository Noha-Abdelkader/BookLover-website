import { Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../Images/images (1).png";
import styles from "./NavBar.module.css";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'BookTok', to:'BookTok', current: true },
  { name: 'Author', to: 'Author', current: false },
  { name: 'Reviews', to: 'Reviews', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
 


return (
    <Disclosure as="nav" className={` ${styles.navBar} fixed top-0 start-0 end-0 z-50  py-2`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center ">
                <Link  to='StartHomePage'>
                <img
                    className="inline-flex h-8 w-auto lg:hidden rounded-full"
                    src={logo}
                    alt="logo"
                  />
                </Link>

                <Link  to='StartHomePage' className='font-black text-amber-800 text-2xl flex items-end'>
                  <img className="hidden h-8 w-auto lg:inline-flex rounded-full" src={logo} alt="logo" />
                  <span>Book Lovers</span>
                  </Link>

                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                                  {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">

                  <div>

                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-md font-semibold  text-amber-800  hover:text-orange-500">
          <Link to='StartHomePage'  >Home</Link>
          <ChevronDownIcon  className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>

                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${styles.navBar}  `}>
                      <Menu.Item >
                        {({ active }) => (
                          <Link  to='search' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}  >Search</Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to='orderBook' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >Pre-order Books
                          </Link>
                        )}
                      </Menu.Item>
                     
                    </Menu.Items>
                  </Transition>
                </Menu>
{/* -------------------end dropdown ----------------- */}
                    {navigation.map((item) => (
                    
                      <Link
                        key={item.to}
                        to={item.to}
                        className={classNames(
                          item.current ? ' text-orange-500' : 'text-amber-800 hover:text-orange-500',
                          'rounded-md px-3 py-2 text-md font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
         
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button  key={item.to}
                  as="a" className='block' aria-current={item.current ? 'page' : undefined} >
                 <Link className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                   to={item.to}>{item.name}</Link> 
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

