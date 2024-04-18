'use client';
import {FilterButton} from './FilterButton';
import Link from 'next/link';

export const Filters = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <h3 style={{fontFamily: 'DM Sans, sans-serif', lineHeight: '20.83px', color: '#323232', size: '16px', fontWeight: '400'}}>Drink Category</h3>
                <Link href="#" style={{fontFamily: 'DM Sans, sans-serif', lineHeight: '20.83px', color: '#646464', size: '16px', fontWeight: '400'}}>Select All</Link>
            </div>
            <ul style={{display: 'flex', justifyContent: 'center', listStyleType: 'none', gap: '15px', alignItems: 'center'}}>
                <li>
                    <FilterButton title="All" onClick={() => console.log('Button clicked!')} />
                </li>
                <li><FilterButton title="Beer" icon="/icons/Beer.png" onClick={() => console.log('Button clicked!')} /></li>
                <li><FilterButton title="Wine" icon="/icons/Wine-glass.png" onClick={() => console.log('Button clicked!')} /></li>
            </ul>
        </div>
    )
}