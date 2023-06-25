'use client';
import { CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '../utils';
import CarCard from '@/components/CarCard';
import { fuels, yearsOfProduction, staticCarsData } from '@/constants';
import { HomeProps } from '../types/index';
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-w">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the Cars You May Like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {staticCarsData?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
