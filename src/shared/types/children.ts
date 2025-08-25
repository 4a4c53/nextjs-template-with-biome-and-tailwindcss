import type { ReactNode } from 'react'

/**
 * A readonly type that represents the children prop commonly used in React components.
 *
 * @example
 * ```typescript
 * const MyComponent: React.FC<ChildrenType> = ({ children }) => {
 *   return <div>{children}</div>;
 * };
 * ```
 */
export interface ChildrenType {
	readonly children: ReactNode
}
