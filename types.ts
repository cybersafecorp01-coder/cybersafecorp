
// Fix: Added React import to resolve "Cannot find namespace 'React'" errors in interface definitions.
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Segment {
  name: string;
  icon: React.ReactNode;
}