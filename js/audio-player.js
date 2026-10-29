/**
 * ============================================================================
 * BACKGROUND MUSIC CONTROLLER (BACH.mp3) - ROBUST INSTANT AUTO-PLAY
 * Plays immediately on page load, with instant un-muting & gesture triggers
 * ============================================================================
 */
(function() {
  function initAudioPlayer() {
    var audio = document.getElementById("bg-music");
    var toggleBtns = document.querySelectorAll("#music-toggle, .btn-music-toggle");
    if (!audio) return;

    var TARGET_VOLUME = 0.65;
    var userManuallyPaused = false;

    var iconVolumePlaying = '<svg class="icon-volume-playing" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path class="wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path class="wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
    var iconVolumeMuted = '<svg class="icon-volume-muted" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';

    function updateUI(isPlaying) {
      toggleBtns.forEach(function(btn) {
        var iconEl = btn.querySelector(".music-toggle-icon") || btn.querySelector("#music-toggle-icon");
        if (isPlaying) {
          btn.classList.add("is-playing");
          btn.classList.remove("is-paused");
          btn.setAttribute("title", "Jeda Musik (BACH.mp3)");
          btn.setAttribute("aria-label", "Jeda Musik (BACH.mp3)");
          if (iconEl) iconEl.innerHTML = iconVolumePlaying;
        } else {
          btn.classList.remove("is-playing");
          btn.classList.add("is-paused");
          btn.setAttribute("title", "Putar Musik (BACH.mp3)");
          btn.setAttribute("aria-label", "Putar Musik (BACH.mp3)");
          if (iconEl) iconEl.innerHTML = iconVolumeMuted;
        }
      });
    }

    function showMusicToast(text) {
      var container = document.getElementById("toast-container");
      if (!container) return;
      var toast = document.createElement("div");
      toast.className = "toast";
      toast.innerHTML = '<span>🎵</span><span>' + text + '</span>';
      container.appendChild(toast);
      setTimeout(function() {
        toast.classList.add("fade-out");
        setTimeout(function() { toast.remove(); }, 300);
      }, 2500);
    }

    function playAudio(userInitiated) {
      if (userManuallyPaused && !userInitiated) return;

      audio.muted = false;
      audio.volume = TARGET_VOLUME;

      var promise = audio.play();
      if (promise !== undefined) {
        promise.then(function() {
          userManuallyPaused = false;
          updateUI(true);
          if (userInitiated) {
            showMusicToast("Memutar Musik Latar (J.S. Bach)");
          }
        }).catch(function(err) {
          console.warn("Autoplay unmuted ditahan browser, memulai muted buffer & membuka saat gesture pertama:", err);
          
          // Muted autoplay selalu diizinkan oleh semua browser
          audio.muted = true;
          audio.play().then(function() {
            updateUI(true);
            listenForAnyInteractionToUnmute();
          }).catch(function() {
            listenForAnyInteractionToUnmute();
          });
        });
      }
    }

    function pauseAudio(userInitiated) {
      if (userInitiated) userManuallyPaused = true;
      audio.pause();
      updateUI(false);
      if (userInitiated) {
        showMusicToast("Musik Latar Dijeda");
      }
    }

    function toggleAudio() {
      if (audio.paused || audio.muted) {
        userManuallyPaused = false;
        audio.muted = false;
        audio.volume = TARGET_VOLUME;
        playAudio(true);
      } else {
        pauseAudio(true);
      }
    }

    // Bind click events on all music toggle buttons
    toggleBtns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleAudio();
      });
    });

    // Unmute immediately on ANY user interaction (mousemove, touch, click, scroll)
    var interactionEvents = [
      "pointerdown", "mousedown", "touchstart", "click", 
      "mousemove", "wheel", "scroll", "keydown"
    ];
    var interactionUnlocked = false;

    function unlockAndPlay() {
      if (interactionUnlocked || userManuallyPaused) return;
      interactionUnlocked = true;

      audio.muted = false;
      audio.volume = TARGET_VOLUME;
      var p = audio.play();
      if (p !== undefined) {
        p.then(function() {
          updateUI(true);
        }).catch(function() {});
      }

      interactionEvents.forEach(function(ev) {
        window.removeEventListener(ev, unlockAndPlay, true);
        document.removeEventListener(ev, unlockAndPlay, true);
      });
    }

    function listenForAnyInteractionToUnmute() {
      interactionEvents.forEach(function(ev) {
        window.addEventListener(ev, unlockAndPlay, { capture: true, once: true });
        document.addEventListener(ev, unlockAndPlay, { capture: true, once: true });
      });
    }

    // 1. Initial attempt: unmuted autoplay immediately
    playAudio(false);

    // 2. Prepare gesture listener immediately
    listenForAnyInteractionToUnmute();

    // 3. Expose global controls
    window.__bgMusic = {
      audio: audio,
      play: function() { playAudio(true); },
      pause: function() { pauseAudio(true); },
      toggle: toggleAudio,
      ensurePlay: function() { unlockAndPlay(); }
    };

    console.log("Audio player initialized for BACH.mp3 with instant autoplay strategy.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAudioPlayer);
  } else {
    initAudioPlayer();
  }
})();
