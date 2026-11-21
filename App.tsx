import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/common/Sidebar';
import { Navbar } from './components/common/Navbar';
import { ToastContainer } from './components/common/ToastContainer';
import { PrintReportModal } from './components/common/PrintReportModal';
import { OverviewTab } from './components/dashboard/OverviewTab';
import { UserListView } from './components/users/UserListView';
import { UnfollowersTracker } from './components/history/UnfollowersTracker';
import { ImportView } from './components/import/ImportView';
import { SettingsView } from './components/settings/SettingsView';
import { Sparkles, UploadCloud, Compass, ShieldCheck } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { currentView, analytics, snapshots, loadDemoMode, setCurrentView } = useApp();
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#070B14] text-slate-100 font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Toast System */}
      <ToastContainer />

      {/* Printable / PDF Report Modal */}
      <PrintReportModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-64 bg-[#0A0F1D] h-full shadow-2xl z-50">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onOpenPrintReport={() => setIsPrintModalOpen(true)}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {/* Welcome Screen for First-Time Users if snapshots is 0 */}
          {snapshots.length === 0 && currentView !== 'import' && currentView !== 'settings' ? (
            <div className="max-w-2xl mx-auto py-12 px-6 rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-slate-800 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-purple-600/25">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  Welcome to InstaTrack
                </h2>
                <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                  The private, password-free analytics tool to compare your followers, detect non-followers, and track unfollowers over time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentView('import')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Import Your Instagram Data</span>
                </button>
                <button
                  onClick={loadDemoMode}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-purple-400" />
                  <span>Explore with Demo Data</span>
                </button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero passwords, zero API tokens, 100% processed in your browser</span>
              </div>
            </div>
          ) : (
            <>
              {currentView === 'overview' && <OverviewTab />}

              {currentView === 'not_following_back' && (
                <UserListView
                  title="Not Following Me Back"
                  subtitle="Accounts you follow who do not follow your account back (Following − Followers)."
                  users={analytics ? analytics.notFollowingBack : []}
                  category="not_following_back"
                />
              )}

              {currentView === 'mutual' && (
                <UserListView
                  title="Mutual Followers"
                  subtitle="Accounts that follow you and whom you also follow back (Following ∩ Followers)."
                  users={analytics ? analytics.mutualFollowers : []}
                  category="mutual"
                />
              )}

              {currentView === 'i_dont_follow_back' && (
                <UserListView
                  title="I Don't Follow Back"
                  subtitle="Accounts following you that you have not followed back (Followers − Following)."
                  users={analytics ? analytics.iDontFollowBack : []}
                  category="i_dont_follow_back"
                />
              )}

              {currentView === 'history' && <UnfollowersTracker />}

              {currentView === 'import' && <ImportView />}

              {currentView === 'settings' && <SettingsView />}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
};

export default App;
