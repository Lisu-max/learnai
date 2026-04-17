"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n/context";

interface BirthDateInputProps {
  name: string;
}

const months = {
  fr: [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
  ],
  en: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
};

export function BirthDateInput({ name }: BirthDateInputProps) {
  const { locale } = useTranslation();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1909 }, (_, i) => currentYear - i);

  const daysInMonth = month && year
    ? new Date(parseInt(year), parseInt(month), 0).getDate()
    : 31;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  function clampDayTo(newMonth: string, newYear: string) {
    if (!day) return;
    const newDaysInMonth = newMonth && newYear
      ? new Date(parseInt(newYear), parseInt(newMonth), 0).getDate()
      : 31;
    if (parseInt(day) > newDaysInMonth) {
      setDay(String(newDaysInMonth));
    }
  }

  const value = day && month && year
    ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    : "";

  const selectClass =
    "flex-1 rounded-lg border border-border/50 bg-background px-3 py-3 text-sm outline-none transition-colors text-foreground focus:border-purple-500 focus:ring-1 focus:ring-purple-500 appearance-none";

  const monthNames = months[locale] || months.fr;

  return (
    <div>
      <input type="hidden" name={name} value={value} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {/* Day */}
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className={selectClass}
          required
        >
          <option value="" disabled>
            {locale === "fr" ? "Jour" : "Day"}
          </option>
          {days.map((d) => (
            <option key={d} value={String(d)}>
              {d}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          value={month}
          onChange={(e) => { setMonth(e.target.value); clampDayTo(e.target.value, year); }}
          className={selectClass}
          required
        >
          <option value="" disabled>
            {locale === "fr" ? "Mois" : "Month"}
          </option>
          {monthNames.map((m, i) => (
            <option key={i} value={String(i + 1)}>
              {m}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          value={year}
          onChange={(e) => { setYear(e.target.value); clampDayTo(month, e.target.value); }}
          className={selectClass}
          required
        >
          <option value="" disabled>
            {locale === "fr" ? "Année" : "Year"}
          </option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
