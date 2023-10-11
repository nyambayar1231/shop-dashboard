'use client';
import Link from 'next/link';
import { Sidebar } from 'flowbite-react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiHome,
  HiCloud,
  HiShoppingCart,
} from 'react-icons/hi';

export default function Navbar() {
  return (
    <Sidebar aria-label="Sidebar" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiCloud}>
            <p>Saleor Dashboard</p>
          </Sidebar.Item>
          <div className="h-10" />
          <Sidebar.Item href="/dashboard" icon={HiHome}>
            <p>Нүүр</p>
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Бараа">
            <Sidebar.Item href="/dashboard/products">Бараа</Sidebar.Item>
            <Sidebar.Item href="/dashboard/categories">Categories</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
